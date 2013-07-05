window.DropTask = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl, $menu, $sidebar, data) {
    var projects = new DropTask.Collections.Projects(data.projects);
    this.installMenu($menu, projects);

    new DropTask.Routers.Projects($rootEl, $sidebar, projects);
    Backbone.history.start();
  },

  installMenu: function ($menu, projects) {
    var that = this;
    var projectsView = new DropTask.Views.ProjectsIndex({
      collection: projects
    });

    $menu.html(projectsView.render().$el);
  }
};