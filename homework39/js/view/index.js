'use strict';

const view = {
    controller: null,
    formId: 'todoForm',
    todoContainerId: 'todoItems',
    clearAllBtnId: 'clearAllBtn',
    form: null,
    todoContainer: null,
    currentItemId: 0,
    removeAllBtn: null,

    getForm() {
       if(!this.formId) throw new Error('No form id');
       this.form = document.getElementById(this.formId);
    },

    getTodoContainer() {
       if(!this.todoContainerId) throw new Error('No todoContainer Id ');
       this.todoContainer = document.getElementById(this.todoContainerId);
    },

    getRemoveAllBtn () {
        if(!this.clearAllBtnId) throw new Error('No clear all btn Id ');
        this.removeAllBtn = document.querySelector(".remove-all")
    },


    setEvents() {
        this.form.addEventListener(
            'submit',
            this.formHandler.bind(this)
        )

        document.addEventListener(
            'DOMContentLoaded',
            this.appendData.bind(this)
        )

        this.todoContainer.addEventListener(
            'change',
            this.checkTodoItem.bind(this)
        )

        this.todoContainer.addEventListener(
            'click',
            this.removeElement.bind(this)
        )

        this.removeAllBtn.addEventListener(
            'click',
            this.removeAllTodos.bind(this)
        )
    },

    formHandler(event) {
        event.preventDefault();
        ++this.currentItemId;

        let data = Array.from(
            event.target.querySelectorAll('input[type=text], textarea')
        )
            .reduce(
                (acc, item) => {
                    acc[item.name] = item.value;
                    return acc;
                },
                {}
            )

        data.itemId = this.currentItemId;
        data.completed = false;
       
        this.controller.setData(data, this.formId);
        this.todoContainer.prepend(
            this.createTemplate(data)
        );
        event.target.reset();
    },

    checkTodoItem({target}) {
        const itemId = target.getAttribute('data-item-id');
        const status = target.checked;

        this.controller.changeCompleted(
            itemId,
            this.formId,
            status
        );
    },

    appendData() {
      const data = this.controller.getData(this.formId);
      if(data === null || data.length === 0) return;

      this.currentItemId = data[data.length - 1].itemId;

      const iterator = data[Symbol.iterator]();
	  let nextStep = iterator.next();

		while (!iterator.done) {
			const currentIteratorStep = nextStep.value;
			if (nextStep.done) break;

			this.todoContainer.prepend(this.createTemplate(currentIteratorStep));
			nextStep = iterator.next();
		}
    },

    removeElement({target}) {
        if(!target.classList.contains('remove-item')) return;

        this.controller.removeItem(
            this.formId,
            target.getAttribute('data-item-id')
        )

        target.closest('.taskWrapper').parentElement.remove()

    },

    removeAllTodos() {
        this.controller.removeAll(this.formId);
        this.todoContainer.innerHTML = '';
    },

    createTemplate({title, description, itemId, completed}) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('col-4');

        let wrapInnerContent = `<div class="taskWrapper" >`;
        wrapInnerContent += `<div class="taskHeading">${title}</div>`;
        wrapInnerContent += `<div class="taskDescription">${description}</div>`;
        wrapInnerContent += `<hr>`;
        wrapInnerContent += `<label class="completed form-check">`;
        wrapInnerContent += `<input data-item-id="${itemId}" type="checkbox" class="form-check-input" >`
        wrapInnerContent += `<span>Done ?</span>`
        wrapInnerContent += `</label>`
        wrapInnerContent += `<hr>`;
        wrapInnerContent += `<button class="btn btn-danger remove-item" data-item-id="${itemId}">Remove</button>`;
        wrapInnerContent += '</div>';

        wrapper.innerHTML = wrapInnerContent;

        wrapper
            .querySelector('input[type=checkbox]')
            .checked = completed

        return wrapper;
    },

    init(controllerInstance) {
        this.controller = controllerInstance;
        this.getForm();
        this.getTodoContainer();
        this.getRemoveAllBtn();
        this.setEvents();
    }
}