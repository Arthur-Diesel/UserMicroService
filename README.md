# 👥 UsersMicroService 
<p> Tem o objetivo de lidar com o cadastro e o login de usuários em um ambiente de microsserviços. </p>

<h2><b>📫 Rotas: </b></h2>

### **Login**
* **URL**

    /api/login

* **Method:**
  
  `POST`

* **Data Params**
    * email (required)
    * password (required)
  
    <br />

* **Success Response:**
  * **Code:** 200 <br />
  * **Content:** 
    ``` 
    { 
        "success": true,
        "token": ""
    }
    ```
 
* **Error Response:**
  * **Code:** 400 <br /> 
  * **Content:** 
    ``` 
    { 
        "success": false,
        "error": ""
    }
    ```

### **Register**
* **URL**
    /api/register

* **Method:**
  `POST`

* **Data Params**
    * name (required)
    * email (required)
    * password (required)
  
    <br />

* **Success Response:**
  * **Code:** 200 <br />
  * **Content:** 
    ``` 
    { 
        "success": true,
        "data": {
            "id": "",
            "name": "",
            "email": "",
            "password": "",
            "createdAt": "",
            "updatedAt": ""
        }
    }
    ```
 
* **Error Response:**
  * **Code:** 400 <br /> 
  * **Content:** 
    ``` 
    { 
        "success": false,
        "errors": [
            ...
        ]
    }
    ```