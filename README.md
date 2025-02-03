# Number Classification API

This API classifies a given number and returns its mathematical properties along with a fun fact.

## Endpoint
`GET /api/classify-number?number=<number>`

## Response

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Error Response

```json
{
  "number": "invalid",
  "error": true
}

```
## Installation & Setup

### Prerequisite
- **Node.js Installed** 
- **npm or yarn** 

### Steps To Run
Running the Build and Start Script

Install Dependencies:
```bash
npm run

To build and start the project, run the following command in your terminal:

npm run build:start




