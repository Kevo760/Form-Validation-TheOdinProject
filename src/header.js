function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.classList.add('header-title');
    h1.innerText = 'Form Validation';
    header.style.position = 'fixed';
    header.style.backgroundColor = 'rgb(32, 32, 32';
    header.style.width = '100%';
    header.style.height = '5rem';
    header.style.color = 'white';
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.boxShadow = 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'
    header.style.top = '0';

    header.append(h1);

    return document.body.append(header);
};


export {createHeader};