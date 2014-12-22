define(["exports", "./attached-behavior", "./behavior", "./resource-coordinator", "./resource-registry", "./children", "./custom-element", "./element-config", "./template-controller", "./view-strategy", "./view-compiler", "./view-engine", "./view-factory", "./view-slot", "./binding-language"], function (exports, _attachedBehavior, _behavior, _resourceCoordinator, _resourceRegistry, _children, _customElement, _elementConfig, _templateController, _viewStrategy, _viewCompiler, _viewEngine, _viewFactory, _viewSlot, _bindingLanguage) {
  "use strict";

  exports.AttachedBehavior = _attachedBehavior.AttachedBehavior;
  exports.Property = _behavior.Property;
  exports.Behavior = _behavior.Behavior;
  exports.ResourceCoordinator = _resourceCoordinator.ResourceCoordinator;
  exports.ResourceRegistry = _resourceRegistry.ResourceRegistry;
  exports.ViewResources = _resourceRegistry.ViewResources;
  exports.Children = _children.Children;
  exports.CustomElement = _customElement.CustomElement;
  exports.UseShadowDOM = _customElement.UseShadowDOM;
  exports.ElementConfig = _elementConfig.ElementConfig;
  exports.TemplateController = _templateController.TemplateController;
  exports.ViewStrategy = _viewStrategy.ViewStrategy;
  exports.UseView = _viewStrategy.UseView;
  exports.ConventionalView = _viewStrategy.ConventionalView;
  exports.NoView = _viewStrategy.NoView;
  exports.ViewCompiler = _viewCompiler.ViewCompiler;
  exports.ViewEngine = _viewEngine.ViewEngine;
  exports.ViewFactory = _viewFactory.ViewFactory;
  exports.BoundViewFactory = _viewFactory.BoundViewFactory;
  exports.ViewSlot = _viewSlot.ViewSlot;
  exports.BindingLanguage = _bindingLanguage.BindingLanguage;
});