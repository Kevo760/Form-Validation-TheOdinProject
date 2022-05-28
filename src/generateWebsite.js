import './style.css';
import { createHeader } from './header';
import { formValidation } from './formValidation';

function generateWebsite() {

    createHeader();
    formValidation();
};

export { generateWebsite }