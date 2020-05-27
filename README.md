# Open Calendar API

## Models

This capitol represents all models.

All models used in the Open Calendar API are represented as JSON-objects.

### User

This object represents Open Calendar user.

|Field|Type|Description|
|-----|----|-----------|
|mail|String|User's mail|
|first_name|String|User's first name|
|last_name|String|User's last name|
|google_mail|String|Optional. User's google mail. If logged via Google Auth|
|google_id|String|Optional. User's google id. If logged via Google Auth|

Example of **Mail user**: 

```json5
{
  "mail": "king@winterfell.got",
  "first_name": "Jon",
  "last_name": "Snow"
}
```
Example of **Google user**: 

```json5
{
  "google_id": "420775159475",
  "google_mail": "khaleesi@gmail.com",
  "first_name": "Daenerys",
  "last_name": "Targaryen"
}
```

### Calendar

### Event

### Note

## Methods 

This capitol represents all methods to interact with models.

### Auth 

#### Google

```GET /auth/google/login``` - login via Google Auth

```GET /auth/logout``` - logout from Google account

#### Mail

```GET /auth/mail/login``` - login via Mail

```GET /auth/logout``` - logout from Mail account

### User
```GET /api/user``` - returns current logged [User](#user)

### Calendar

### Event

### Note

