define([
  'text!templates/app.html',
  'views/lists/add',
  'views/lists/edit'
],

function(template, AddListView, EditListView){
  var AppView = Backbone.View.extend({
    id: 'main',
    tagName: 'div',
    className: 'container-fluid',
    el: 'body',
    template: _.template(template),
    events: {
      'click #add-list-button': 'addList',
      'click #edit-list-button': 'editList',
      'click #delete-list-button': 'deleteList'
    },

    initialize: function() {
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },
    listForm: function(form) {
      this.$el.find('#list-editor').html(form.render().el);
      form.$el.find('input:first').focus();

      return false;
    },

    addList: function() {
      return this.listForm(new AddListView({ model: new bTask.collections.lists.model({ title: '' }) }));
    },

    editList: function() {
      return this.listForm(new EditListView({ model: bTask.views.activeListMenuItem.model }));
    },

    deleteList: function() {
      var c = confirm('Are you sure you want to delete that list?');
      if ( c ) {
        bTask.views.activeListMenuItem.model.destroy();
      }
      return false;
    }

  });

  return AppView;
});
