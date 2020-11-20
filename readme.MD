# Endpoints:


### Run the code:

`npm install`

`npm run dev`



#### Get all the monsters:


- http://localhost:8080/monster

method: GET

reply:

```
[
    {
        "_id": "5e553fd915141025fc12e1ee",
        "hp": 327,
        "patk": 26.16,
        "matk": 5.45,
        "pdef": 16.35,
        "mdef": 5.45,
        "gold": 9.81,
        "level": 3,
        "name": "outlaw",
        "__v": 0
    },
    {
        "_id": "5e553fde15141025fc12e1ef",
        "hp": 128.4,
        "patk": 58.85,
        "matk": 12.84,
        "pdef": 5.35,
        "mdef": 7.49,
        "gold": 17.12,
        "level": 4,
        "name": "shadowborne",
        "__v": 0
    }
]
```

or

```
[]
```


#### Get a single monster by its name:


- http://localhost:8080/monster/:name

method: GET

reply:

```
[
    {
        "_id": "5e553fd915141025fc12e1ee",
        "hp": 327,
        "patk": 26.16,
        "matk": 5.45,
        "pdef": 16.35,
        "mdef": 5.45,
        "gold": 9.81,
        "level": 3,
        "name": "outlaw",
        "__v": 0
    }
]
```

or

```
[]
```


#### Create a monster:

- http://localhost:8080/monster

method: POST

payload:

```
{
	"name": "outlaw",
	"level": 3
}
```