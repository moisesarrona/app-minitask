# Standar Code
This file show standars, nomenclature, and comments to used when you write code.

## Nomenclature
To name we will use camenCase.

**Variables**
Name variable by the type prefix follewed by the functionality, to separate by context for example
```
private userData: UserI
public userVisible: boolean
public userResponse: any
```
or
```
private themeChange: UserI
public themeValue: boolean
public formUserVisible: boolean
```

In Interfaces, directives etc we will name diferent.

*If are declared in contructor*  
We will take the prefix symbol _ followed by the name of the directive or interface.
```
private _formBuilder: UntypedFormBuilder,
private _userService: UserService,
private _route: Router
```

*in implementations*
```
public formUserRegister: UntypedFormGroup = this._formBuilder.group({
```

**Functions**
Name of the function must be descriptive for example using English sentences 
```
showUserEdithForm = () : boolean => {}
change theme = () : any => {}
```

## Comments
```
/**
 * Change theme dark or light
 * @param data 
 * @returns
 */
```