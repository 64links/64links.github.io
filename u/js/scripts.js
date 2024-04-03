/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
const sanitize = (i) => i
    .replace(/%2b/g, '+')
    .replace(/%2f/g, '/')
    .replace(/%3d/g, '=')

const onHashChange = () => {
    if (window.location.hash) {
        const hash = window.location.hash.substring(1)
        let decoded = 'Invalid link :-('
        try {
            decoded = atob(sanitize(hash))
        } catch (e) {}
        document.getElementById('payload').innerText = decoded
    }
}
window.addEventListener(
    "hashchange",
    () => onHashChange(),
    false,
);

onHashChange();
