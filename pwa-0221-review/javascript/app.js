import { loadArticles, firstLoad, addItemListen } from './modules.js';
import Utility from './utility.js';
class Model {
    constructor() {
        Utility.addMultiListeners({
            names: ["cEditItems", "cAddItems"],
            events: [e => this.editItems(e), e => this.addItems(e)]
        });
    }
    addItems(e) {
        let item = e.item;
        let inputs = [document.querySelector('#itemTitle'), document.querySelector('#itemDesc')];
        let button = document.querySelector('#submit');

        button.disabled = true;
        button.classList.add('disabled');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                Utility.validateFormInput(button, input, inputs);
            });
        });
        let submit = document.querySelector('button.submit');
        if (!submit.clicked) {
            submit.clicked = submit.addEventListener('click', e => {
                e.preventDefault();
                const evt = new Event('vAddItem');
                evt.item = item;
                evt.form = e.form;
                evt.inputs = {
                    title: document.querySelector('#itemTitle').value,
                    desc: document.querySelector('#itemDesc').value
                }
                document.dispatchEvent(evt);
                submit.remove();
            });
        }
    }
    editItems(e) {
        console.log(e);

        let article = e.article;
        console.log(article.querySelector('h2').innerHTML);
        console.log(article.querySelector('p').innerHTML);
        let inputs = [article.querySelector('h2'), article.querySelector('p')];
        let isDone = document.querySelector("#done");
        let isEditable = (bool) => {
            article.querySelectorAll('[contenteditable]').forEach(elem => {
                elem.setAttribute('contenteditable', bool);
            })
            article.setAttribute("draggable", !bool);
        }
        let editMode = {
            on: () => {
                isEditable(true);
                article.querySelector('h2').focus();
                if (!isDone) {
                    article.insertAdjacentHTML('beforeend', '<button id="done">Done</button>');
                    let [title, desc] = inputs;
                    let button = document.querySelector('#done');
                    inputs.forEach(input => {
                        input.addEventListener('input', () => {
                            // Utility.validateEditInput(document.querySelector('#done'), inputs[0], inputs[1]);
                            console.log('validating');
                            // console.log(title.innerHTML);
                            // console.log(desc.innerHTML);
                            let titleFilled = title.innerHTML != '<br>' && title.innerHTML != '';
                            let descFilled = desc.innerHTML != '<br>' && desc.innerHTML != '';
                            console.log(titleFilled);
                            console.log(descFilled);
                            // console.log(title.innerHTML == undefined);
                            if (titleFilled && descFilled) {
                                console.log('no items missing');
                                title.classList.remove('invalid');
                                desc.classList.remove('invalid');
                                button.disabled = false;
                                button.classList.remove('disabled');
                            }
                            else {
                                console.log('missing item');
                                if (!titleFilled && !descFilled) {
                                    console.log('all empty');
                                    title.classList.add('invalid');
                                    desc.classList.add('invalid');
                                }
                                else if (!titleFilled && descFilled) {
                                    console.log('title empty');
                                    disableButton();
                                    title.classList.add('invalid');
                                    desc.classList.remove('invalid');
                                }
                                else if (!descFilled && titleFilled) {
                                    console.log('description empty');
                                    disableButton();
                                    desc.classList.add('invalid');
                                    title.classList.remove('invalid');
                                }
                                else {
                                    throw 'how';
                                }
                            }
                            function disableButton() {
                                button.disabled = true;
                                button.classList.add('disabled');
                            }
                        });
                    });

                    document.querySelector("#done").addEventListener('click', () => editMode.off());
                }
            },
            off: () => {
                isEditable(false);
                document.querySelector("#done").remove();
            }
        }
        editMode.on();
    }
}
class View {
    constructor() {
        Utility.addMultiListeners({
            names: ["vGetItems_Complete", 'vAddItem', "vCreateForm", "mSetTheme"],
            events: [e => this.displayListItems(e), e => this.addItems(e), e => this.displayForm(e), () => Utility.setTheme(document.body.classList)]
        });
    }
    displayListItems(e) {
        const [itemsTemplate, listsTemplate] =
            [document.querySelector('#itemTemplate'), document.querySelector('#listTemplate')];
        e.data.forEach(list => {
            const listClone = document.importNode(listsTemplate.content, true);
            const listTitle = listClone.querySelector('section');
            let listID = list.title.toLowerCase();
            listTitle.setAttribute("id", listID);
            listClone.querySelector('h2').innerHTML = list.title;
            document.querySelector('div.wrapper').appendChild(listClone);

            list.items.forEach(item => {
                const itemClone = document.importNode(itemsTemplate.content, true);
                const itemID = itemClone.querySelector('article');

                itemID.setAttribute("id", "item" + item.id);

                [itemClone.querySelector('h3').innerHTML, itemClone.querySelector('p').innerHTML] =
                    [item.title, item.description];

                document.querySelector(`#${listID}`).appendChild(itemClone);
            });
        });
        const evt = new Event('mGetItems_Complete');
        document.dispatchEvent(evt);
    }
    displayForm(e) {
        const formTemplate = document.querySelector('#formTemplate');
        const form = formTemplate;
        let wrapper = document.querySelector(`div.wrapper`);

        if (!form.clone) {
            form.clone = document.importNode(formTemplate.content, true);
        }
        wrapper.appendChild(form.clone);
        wrapper.querySelector('form.modal').reset();
        document.querySelector('div.modal-bg').classList.add('bg-active');
        document.querySelector('.modal-close').addEventListener('click', e => {
            document.querySelector('div.modal-bg').classList.remove('bg-active')
        });

        if (!document.querySelector('button.submit')) {
            document.querySelector('form.modal').insertAdjacentHTML('beforeend',
                '<button id="submit" role="button" class="submit">Add</button>');
            const evt = new Event('cFormDisplayed');
            evt.item = e.item;
            document.dispatchEvent(evt);
        }
    }
    addItems(e) {
        e.preventDefault();
        let item = e.item;
        let id = document.querySelectorAll('article.kanban').length;
        let itemArticle;
        const itemsTemplate = document.querySelector('#itemTemplate');
        const itemClone = itemsTemplate.content.cloneNode(true);
        document.querySelector('div.modal-bg').classList.remove('bg-active');

        [itemClone.querySelector('h3').innerHTML, itemClone.querySelector('p').innerHTML] =
            [document.querySelector('#itemTitle').value, document.querySelector('#itemDesc').value];

        itemArticle = itemClone.querySelector('article.kanban');

        itemArticle.setAttribute("id", `item${id}`);
        console.log('added Item')
        item.appendChild(itemClone);

        document.querySelector('button.submit').remove();
        addItemListen(document.querySelector('#item' + id));
    }
}

class Controller {
    constructor() {
        [this.Model, this.View] = [new Model(), new View()];
        loadArticles();
        document.querySelector('#addItem').addEventListener('click', e => this.createClone(e, '#formTemplate'));
        // let load = ['mGetItems_Complete'];
        // Utility.addListeners(load, () => firstLoad());
        // Utility.addMultiListeners({
        //     names: ["cFormDisplayed"],
        //     events: [e => {
        //         const evt = new Event('cAddItems');
        //         evt.item = e.item;
        //         evt.form = e.form;
        //         document.dispatchEvent(evt);
        //     }]
        // });
    }
    static getInstance() {
        if (!Controller._instance) {
            return Controller._instance = new Controller();
        }
        else {
            throw "Exception: Assignment Already Instantiated.";
        }
    }
    createClone(e, template) {
        e.preventDefault();
        const formTemplate = document.querySelector(template);
        const form = formTemplate;
        let wrapper = document.querySelector(`div.wrapper`);

        if (!form.clone) {
            form.clone = formTemplate.content.firstElementChild.cloneNode(true);
        }
        wrapper.appendChild(form.clone);
        wrapper.querySelector('form.modal-display').reset();
        document.querySelector('div.modal-bg').classList.add('bg-active');
        document.querySelector('.modal-close').addEventListener('click', e => {
            form.clone.remove();
        });

        if (!document.querySelector('button.submit')) {
            document.querySelector('form.modal-display').insertAdjacentHTML('beforeend',
                '<button id="submit" role="button" class="submit">Submit</button>');
            document.querySelector('#submit').addEventListener('click', e => {

                this.createItem(e, '#itemTemplate');
                form.clone.remove();
            });
        }
    }
    createItem(e, template) {
        e.preventDefault();
        const formTemplate = document.querySelector(template);
        const form = formTemplate;
        let wrapper = document.querySelector(`div.wrapper`);

        if (!form.clone) {
            form.clone = formTemplate.content.firstElementChild.cloneNode(true);
            console.log('item added');
        }
        wrapper.appendChild(form.clone);
    }
}

(() => {
    window.addEventListener('load', function () {
        const myAssigmnent = Controller.getInstance();
    });
})();