
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
    console.log(xml);
    // check if there's type/error in syntax
    // since parserrror is array, if it has item meaning
    // there's an error
    if(xml.getElementsByTagName('parsererror').length) {
        return 'Invalid PML'
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
    return true
}

// create function that convert xml into format that is readable to domino employee (html tag)

// setup post request and save the order in database

// return it and display to output message



// Finish
// check if the pmlorder is invalid PML

// TO DO
// convert xml into format that is more readable

export {convertTagToXml, isPmlOrderValid};