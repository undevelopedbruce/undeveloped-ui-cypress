# Undeveloped Bruce Cypress Examples For Funs
This repo uses Yarn as a package manager.

## Setup / Install Packages
```
yarn Install
```

## Run Cypress tests
```
yarn test:e2e
```
This command opens the Cypress UI from which you can choose tests to run

## Acceptance Criteria
It's not the most interactive site in the world, so just a few basic bits:
1. Site content loads
2. Site navigation works
3. Sending 'contact Bruce' enquiry is successful
4. Sending incomplete 'contact Bruce' enquiry is unsuccessful
5. Searching for a valid term returns search results
6. Searching for an invalid term returns no search results