//
// ## collections.examples
//

define('collections/examples', [
  'models/example'
],

function(Model) {

  var Collection = Backbone.Collection.extend({
    model: Model,

    url: function() {
      return app.config.api + 'examples';
    }

  });

  app.namespace.setItem('collections.examples', Collection);
  return Collection;

});