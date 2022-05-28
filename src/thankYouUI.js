function thankYouUI() {
    const thank = document.createElement('div');
    thank.classList.add('thank-you');

    const h1 = document.createElement('h1');
    h1.innerText = 'Thank you, You submission worked!';

    thank.append(h1);

    const content = document.querySelector('.content');

    return content.append(thank);
}

export {thankYouUI};