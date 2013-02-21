define([
'models/tasklist'
, 'views/lists/edit'
],

function(TaskList, EditListView) {
var AddListView = EditListView.extend({
  submit: function(e) {
    console.log('submit');
    e.preventDefault();
    var self = this
      , title = this.$el.find('input[name="title"]').val()
      ;

    this.model.save({ title: title }, { success: function(model) {
      // Add the updated model to the collection
      bTask.collections.lists.add(model);
      console.log(bTask.collections.lists);
      self.remove();
    }});

    return false;
  }
});

return AddListView;
});
