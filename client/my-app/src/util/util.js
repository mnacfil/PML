
// regex, that convert tag to xml
const convertTagToXml = (tag) => {
    tag = tag.replace(/{/g, '<').replace(/\\/g, '/').replace(/}/g, '>');

    const parser = new DOMParser();
    return parser.parseFromString(tag, 'text/xml');
}

// note
// getElementsByTagName return object with length propert

// check the pml order
const isPmlOrderValid = (order) => {
    const xml = convertTagToXml(order)
    // check if there's type/error in syntax
    // since parserrror is array, if it has item meaning
    // there's an error
    if(xml.getElementsByTagName('parsererror').length) {
        return `<h2 className="invalid">Invalid PML</h2>`;
    }
    // check if order element is there
    const orderTag = xml.getElementsByTagName('order');
    if(orderTag.length === 0) {
        return 'No order element provided'
    }
    // store the order inside pmlOrder (xml format)
    const pmlOrder = orderTag[0];
    // check if order element has no number attr, of if the value is empty
    if(!pmlOrder.hasAttribute('number') || pmlOrder.getAttribute('number') === '') {
        return 'No order ticket provided'
    }
    // const pizzaTags = pmlOrder.getElementsByTagName('pizza')
    // console.log(pizzaTags[0]);

    return true;
}

const displayReadableOrder = (order) => {
    const output = convertXMLtoHTML(order);
    return output;
}

// create function that convert xml into format that is readable to domino employee (html tag)
const convertXMLtoHTML = (order) => {
    const xml = convertTagToXml(order);

    // wrap the whole html inside container
    let htmlWrapper = `<article className='output-order' >`;

    // order html
    const orderTag = xml.getElementsByTagName('order')[0];
    const orderTicket = orderTag.getAttribute('number');
    const orderHtml = `<h2>Order ${orderTicket}</h2>`;

    // add order html to htmlWrapper
    htmlWrapper += orderHtml;

    const pizzas = orderTag.getElementsByTagName('pizza');
    for (const pizza of pizzas) {
        const pizzaNumber = pizza.getAttribute('number');
        // pizza html
        const pizzaHtml = `<h3>pizza ${pizzaNumber}</h3>`;

        // size html
        const size = pizza.getElementsByTagName('size')[0];
        const sizeHtml = `<p>${size.textContent}</p>`;
        // crust html
        const crust = pizza.getElementsByTagName('crust')[0];
        const crustHtml = `<p>${crust.textContent}</p>`;
        // type html
        const type = pizza.getElementsByTagName('type')[0];
        const typeHtml = `<p>${type.textContent}</p>`;
        // this will holde the toppings for custom type
        let toppingContainer;
        // topping html
        if(type.textContent === 'custom') {
            // div the wrap the whole toppings
            toppingContainer = `<div className="topping-container">`;
            const toppings = pizza.getElementsByTagName('toppings');
            for(const topping of toppings) {
                // opening div for each topping
                toppingContainer += "<div>";
                const toppingArea = topping.getAttribute('area');
                let area;
                if(Number(toppingArea) === 0) {
                    area = 'Whole:';
                } else if(Number(toppingArea) === 1) {
                    area = 'First-Half:';
                }
                else {
                    area = 'Second-Half:';
                }
                // put h4 tag inside the topping div
                toppingContainer += `<h5>toppings ${area}</h5>`;
                // add another opening div to wrap the all items per topping
                toppingContainer += `<div>`;
                // item html
                const items = topping.getElementsByTagName('item');
                for(const item of items) {
                    const itemHtml = `<span>${item.textContent}</span>`;
                    // each iteration put the span inside the div
                    toppingContainer += itemHtml;
                }
                // close the div the wrap the items
                toppingContainer += `</div>`;
                // close the div for topping
                toppingContainer += `</div>`;
            }
            // close the div that wrap the whole toppings
            toppingContainer += '</div>';
        }

        // put the pizza 1, 2... every iteration inside htmlWrapper
        htmlWrapper += `
        <div className='pizza-container'>
            ${pizzaHtml}
            <div className="pizza-details">
                ${sizeHtml}
                ${crustHtml}
                ${typeHtml}
            </div>
            ${toppingContainer ? toppingContainer : ""}
        </div>
        
        `;
    }
    // end of htmlWrapper
    htmlWrapper += `</article>`;

    return htmlWrapper;
}

// To Do
// setup post request and save the order in database

export {isPmlOrderValid, displayReadableOrder};