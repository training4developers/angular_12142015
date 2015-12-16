(function(angular) {

	"use strict";

	// WidgetApp.Constants
	angular.module("WidgetApp.Constants", []);
	angular.module("WidgetApp.Services", ["WidgetApp.Constants"]);
	angular.module("WidgetApp.Filters", ["WidgetApp.Services"]);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Services"]);
	angular.module("WidgetApp.Directives", []);

	angular.module("WidgetApp",
		["ui.router", "WidgetApp.Constants", "WidgetApp.Directives", "WidgetApp.Controllers","WidgetApp.Filters"])
		.run(function($templateCache) {

			$templateCache.put("tpls/home.html", `
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Color</th>
							<th>Size</th>
							<th>Quantity</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr ng-repeat="widget in widgets">
							<td>{{widget.name}}</td>
							<td>{{widget.color | colorName}}</td>
							<td>{{widget.size}}</td>
							<td>{{widget.quantity}}</td>
							<td>
								<button ui-sref="edit({ widgetId: widget._id })">Edit</button>
								<button ui-sref="view({ widgetId: widget._id })">View</button>
							</td>
						</tr>
					</tbody>
				</table>
				<button ui-sref="create">Create Widget</button>
			`);

			$templateCache.put("tpls/view.html", `
				<div>
					<div>Name: {{widget.name}}</div>
					<div>Description: {{widget.description}}</div>
					<div>Color: {{widget.color}}</div>
					<div>Size: {{widget.size}}</div>
					<div>Quantity: {{widget.quantity}}</div>
				</div>
				<button ui-sref="edit({widgetId:widget._id})">Edit</button>
				<button ui-sref="home">Return to List</button>
			`);

			$templateCache.put("tpls/edit.html", `
				<style>
					input.ng-valid {
						border: 2px solid green;
					}
					input.ng-invalid.ng-touched {
						border: 2px solid red;
					}
				</style>
				<form novalidate name="widgetForm">
					<div ng-show="widgetForm.$invalid">
						<ul>
							<li ng-show="widgetForm.widgetName.$invalid && widgetForm.widgetName.$touched">Please enter a name.</li>
							<li ng-show="widgetForm.widgetDescription.$invalid && widgetForm.widgetDescription.$touched">Please enter a description.</li>
							<li ng-show="widgetForm.widgetColor.$invalid && widgetForm.widgetColor.$touched">Please enter a color.</li>
							<li ng-show="widgetForm.widgetSize.$invalid && widgetForm.widgetSize.$touched">Please enter a size.</li>
							<li ng-show="widgetForm.widgetQuantity.$invalid && widgetForm.widgetQuantity.$touched">Please enter a quantity.</li>
						</ul>
					</div>
					<div>
						<div>
							<label>Name:
								<input ng-model="widget.name" name="widgetName" fmr-required>
							</label>
							<span ng-show="widgetForm.widgetName.$invalid && widgetForm.widgetName.$touched">
								Please enter a name.
							</span>
						</div>
						<div>
							<label>Description:
								<textarea ng-model="widget.description" name="widgetDescription"
									rows="5" cols="40" required></textarea>
							</label>
							<span ng-show="widgetForm.widgetDescription.$invalid && widgetForm.widgetDescription.$touched">
								Please enter a description.
							</span>
						</div>
						<div>
							<label>Color:
								<select ng-model="widget.color" name="widgetColor"
									ng-options="color.code as color.name
										group by color.category for color in colors">
									<option value="">Select One...</option>
								</select>
							</label>
							<span ng-show="widgetForm.widgetColor.$invalid && widgetForm.widgetColor.$touched">
								Please enter a color.
							</span>
						</div>
						<div>
							<fieldset>
								<legend>Size:</legend>
								<label>Small:
									<input name="widgetSize" ng-model="widget.size" type="radio" value="small">
								</label>
								<label>Medium:
									<input name="widgetSize" ng-model="widget.size" type="radio" value="medium">
								</label>
								<label>Large:
									<input name="widgetSize" ng-model="widget.size" type="radio" value="large">
								</label>
							</fieldset>
						</div>
						<div>
							<label>Quantity:
								<input ng-model="widget.quantity" name="widgetQuantity" type="number" required>
							</label>
							<span ng-show="widgetForm.widgetQuantity.$invalid && widgetForm.widgetQuantity.$touched">
								Please enter a quantity.
							</span>
						</div>
					</div>
					<button type="button" ng-click="saveWidget()" ng-disabled="widgetForm.$invalid">Save</button>
					<button type="button" ng-click="deleteWidget()" ng-if="widget._id">Delete</button>
					<button type="button" ui-sref="home">Return to List</button>
				</form>
			`);

		});

})(angular);
