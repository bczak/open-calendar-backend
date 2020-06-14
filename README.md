# Open Calendar API

## Models

This capitol represents all models.

All models used in the Open Calendar API are represented as JSON-objects.

### User

This object represents user.

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
Example of **Anonymous User**:

```json5
{
  "mail": "anonymous"
}
```
### Calendar
This object represents calendar.

|Field|Type|Description|
|-----|----|-----------|
|title|String|Calendar's title|
|creator|String|Mail of the creator of calendar|
|timezone|[Timezone](#Timezone)|Calendar's timezone|
|type|Boolean|Type of calendar. True if public or False is private|
|members|Array of [User](#User)|Members of this calendar|
|events| Array of [Event](#Event)|Events in this calendars|

*Members of group have the same rights as creator, except they cannot delete the calendar

Example of **Calendar**
```json
{
  "title": "Lessons",
  "creator": "khaleesi@gmail.com",
  "timezone": "Europe/Prague",
  "type": true,
  "members": [
    {
      "mail": "king@winterfell.got",
      "first_name": "Jon",
      "last_name": "Snow"
    }
  ],
  "events": []
}
```
### Event
This object represents event.

|Field|Type|Description|
|-----|----|-----------|
|title|String|Event's title|
|start|Date|Start of event|
|end|Date|End of event|
|color|String|Optional. Color of event - hash(#00ff00) or word(green) |
|notes|Array of Note|Optional. Notes of event|
|repeat|String|Optional. Can be "day","week","month","year" or empty string.|

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
```GET /api/user``` - return current logged [User](#User)
```GET /api/user/{id}``` - return user by given id

### Calendar

```GET /api/calendar``` - return array of all calendars of signed [User](#User). In case of anonymous user, returns empty array

```GET /api/calendar/{id}``` - return the calendar based on id

```POST /api/calendar``` - create new calendar

```PUT /api/calendar/{id}``` - update existed calendar by id

```DELETE /api/calendar/{id}``` - delete existed calendar by id

### Event

```GET /api/event/{id}``` - return array of events in calendar found by id of calendar

```POST /api/event/{id}``` - create event in the calendar found by id of calendar

```PUT /api/event/{id}/{event_id}``` - update existing event by id of calendar and event_id 

```DELETE /api/event/{id}/{event_id}``` - delete existing event by id of calendar and event


## Other
### Inviting 
You can invite/ban people to your calendar by calling:

```POST /api/invite/{mail}```
### Timezone

As far as Open Calendar using [moment.js](https://momentjs.com) all timezones are taken from IANA list of timezone 


### API Limits
You can only create 5 calendars from one IP in 1 hour, then you start catching error.