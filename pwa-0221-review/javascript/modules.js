import Utility from './utility.js';
export default function loadArticles() {
    let data = [
        {
            name: "Grab Milk",
            description: "2% milk from Gerrity's"
        },
        {
            name: "Bag of Grapes",
            description: "Red grapes"
        },
        {
            name: "Buy Toilet Paper",
            description: "Charmin Ultrasoft"
        }];
    data.forEach(listItem => {
        createItem(listItem, '#itemTemplate');
    });
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener("click", e => onClick(e)));
}
function createItem(item, template) {
    const formTemplate = document.querySelector(template);
    const form = formTemplate;
    let wrapper = document.querySelector(`div.wrapper`);

    form.clone = formTemplate.content.firstElementChild.cloneNode(true);
    form.clone.querySelector('h2').innerHTML = item.name;
    form.clone.querySelector('p').innerHTML = item.description;
    wrapper.appendChild(form.clone);
}
function firstLoad() {
    let [buttons, draggables, lists] =
        [document.querySelectorAll('button'),
        document.querySelectorAll('.draggable'),
        document.querySelectorAll('section.list')];
    let listening = {
        buttons: () => {
            buttons.forEach(button => button.addEventListener("click", e => onClick(e)));
            let toggle = document.querySelector('#toggle');
            if (!toggle.events) {
                toggle.addEventListener('click', e => onClick(e));
            }
        },
        draggables: () => {
            draggables.forEach(element => {
                element.addEventListener('dragstart', () => element.classList.add('dragging'));
                element.addEventListener('dragend', () => element.classList.remove('dragging'));
            });
        },
        lists: () => {
            lists.forEach(list => {
                list.addEventListener('dragover', e => {
                    e.preventDefault();
                    list.appendChild(document.querySelector('.dragging'));
                });
            });
        }
    }
    listening.buttons();
    listening.draggables();
    listening.lists();
    checkStorage();
}

function addItemListen(item) {
    item.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", e => onClick(e));
    });
}

function onClick(e) {
    let trigger = {
        add: e => {
            const addEvt = new Event('vCreateForm');
            addEvt.item = e.parentNode;
            document.dispatchEvent(addEvt);
        },
        edit: e => {
            const editEvt = new Event('cEditItems');
            editEvt.article = e;
            document.dispatchEvent(editEvt);
        },
        theme: e => {
            const themeEvt = new Event('mSetTheme');
            themeEvt.item = e;
            document.dispatchEvent(themeEvt);
        }
    }
    let Buttons = {
        classes: () => {
            switch (e.target.className) {
                case 'add':
                    trigger.add(e.target);
                    break;
                case 'edit':
                    trigger.edit(e.target.parentNode);
                    break;
                case 'delete':
                    e.target.parentNode.remove();
                    break;
                default:
                    throw 'No ID or Class Available';
            }
        },
        ids: () => {
            switch (e.target.id) {
                case 'set-teal':
                    Utility.setColor('teal', ['pink', 'orange']);
                    break;
                case 'set-pink':
                    Utility.setColor('pink', ['orange', 'teal']);
                    break;
                case 'set-orange':
                    Utility.setColor('orange', ['teal', 'pink']);
                    break;
                case 'toggle':
                    trigger.theme(e.target);
                    break;
                default:
                    Buttons.classes();
            }
        }
    }
    hasId(e.target.id) !== -1 ? Buttons.ids() : Buttons.classes();
}

function hasId(element) {
    return typeof element.id == 'undefined';
}

export { loadArticles, firstLoad, addItemListen } 