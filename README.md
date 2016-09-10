Sails prototyper
===================


Sails extension to be used together with lodash npm module to extend model, controllers or any other sails class.

----------


Installation
-------------

Prototyper creates an empty object which can be easily extended with new methods or functions. That empty object is after merged with the controller, model, etc.

```sh
$ npm install sails-prototyper --save
```
This will install the module.
How to use
-------------

#### Building prototype

```js
var proto = require('sails-prototyper');
var Model = new proto();

or

var Model = new require('sails-prototyper')();

```

#### Extending model functionality
The model can be extended with a simple attribute with a value or with a method containing some custom logic.

```js
//Specification
//Model.extend(AttributeName (string), AttributeValue (any type))
Model.extend('method1','data');
or
Model.extend('method2',function(data){
	//Do something with the data
	return data;
});
```
It is also posible to interact between the injected methods as they are all available in the context


```js
Model.extend('method1',function(data){
	return "Hi" + data;
});
or
Model.extend('method2',function(data){
	//Do something with the data
	return this.method1(data);
});

//Then in the code, where you need to use the model method
var message = UserModel.method2(' Javier ');
console.log(message);

Would output : "Hi Javier"
```


#### Using the funcionality
The model can be extended with a simple attribute with a value or with a method containing some custom logic.

```js
Model.method1(attribute);
```