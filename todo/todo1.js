/**
 * Created by Kolya on 07.04.2017.
 */

$(function () {
    var ToDo = function () {
        this.model = [
            {text: 'Купить молоко'},
            {text: 'Одеть трусы'},
            {text: 'Сходить на работу'}
        ];
        this.inputField = $('.task-form__text');
        this.form = $('.task-form');
        this.todoList = $('.table__body');

        this.init();
    };

    //получить размер модели - кол. элем на текущ момент
    ToDo.prototype.getLength = function() {
        // console.log(this.model.length);
        return this.model.length;
    };
    //сгенерировать строку с новым элементом
    ToDo.prototype.getItemHtml = function (position, item) {
        var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" class="btn btn-info">&#8593;</button></td><td><button type="button" data-index=":index" class="btn btn-danger">X</button></td></tr>'
        return tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position - 1);
    };
    //вставить элемент в список
    ToDo.prototype.appendRenderItem = function (index, item) {
        this.todoList.append(this.getItemHtml(index, item.text));
    };
    //вставить элемент в DOM
    ToDo.prototype.addItem = function (todoText) {
        var newTodo = { text: todoText};
        this.model.push(newTodo);
        this.appendRenderItem(this.getLength(), newTodo)
    };
    //отрендерить весь список
    ToDo.prototype.renderList = function () {
        __self = this;
        var list = '';
        $.each(this.model, function (index, item) {
            list += __self.getItemHtml(index + 1, item.text)
        });
        this.todoList.html(list);
    };
    //На SUBMIT form
    ToDo.prototype.onFormSubmit = function(e) {
        e.preventDefault();
        // console.log(this.inputField.val());
        if(!this.inputField.val())  return;
        this.addItem(this.inputField.val());
        this.form.trigger('reset');
        // console.log(this.model);


    };
    ToDo.prototype.removeItem = function (index) {
        this.model.splice(index, 1);
        this.renderList();

    };
    //Инициализация
    ToDo.prototype.init = function() {
        var __self = this;
        this.renderList();

        this.todoList.on('click', '.btn-danger', function (e) {
            var index = $(e.target).data('index');
                // console.log(index);
            __self.removeItem(index);
        });

        // this.todoList.on('click', '.btn-info', function (e) {
        //     console.log('info');
        // });
        this.form.submit(function (e) {
            __self.onFormSubmit(e);
        });


    };
   
    window.todo = new ToDo();

    // this.todoList.on('click', '.btn-info', function (e) {
    //     console.log('info');
    // });
});





