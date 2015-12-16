(function(angular) {

	factory.$inject = [];

	function factory() {

		var
			lastWidgetId = 3,
			widgets = [
				{ id: 1, name: "Widget 1", description: "The first widget.",
					color: "blue", size: "large", quantity: 3 },
				{ id: 2, name: "Widget 2", description: "The second widget.",
					color: "red", size: "medium", quantity: 1 },
				{ id: 3, name: "Widget 3", description: "The third widget.",
					color: "orange", size: "small", quantity: 2 }
			];

		return {
			getAll: function() {
				return widgets;
			},
			get: function(widgetId) {
				return widgets.filter(function(widget) {
						return widget.id === widgetId;
				})[0];
			},
			insert: function(widget) {
				widget.id = ++lastWidgetId;
				widgets.push(widget);
				return widget.id;
			},
			update: function(widget) {

				var existingWidget = widgets.filter(function(w) {
						return w.id === widget.id;
				})[0];

				existingWidget.name = widget.name;
				existingWidget.description = widget.description;
				existingWidget.color = widget.color;
				existingWidget.size = widget.size;
				existingWidget.quantity = widget.quantity;

			},
			delete: function(widgetId) {

				var existingWidget = widgets.filter(function(widget) {
						return widget.id === widgetId;
				})[0];

				var existingWidgetIndex = widgets.indexOf(existingWidget);
				widgets.splice(existingWidgetIndex, 1);

				return existingWidget;

			}
		}

	}

	angular.module("WidgetApp.Services")
		.factory("widgets", factory)

})(angular);
