# a-card

## Usage

```html
<a-card 
  [score]="score" 
  [coffee]="coffee" 
  [revelation]="revelation" 
  [name]="name">
</a-card>

```
When starting a new game, the values of the variables must be initialized.

| Variable    | Valor |
| ----------- | ----- |
| score | 0     |
| revelation  | false |
| coffee      | false |




## Input
| Name        | Description                                               | Type             |
| ----------- | --------------------------------------------------------- | ---------------- |
| name        | Player's name                                             | string           |
| score | Points voted by the player                                | string or number |
| revelation  | Indicates if the player can reveal cards of other players | boolean          |
| coffee      | Indicates if the player is occupied                       | boolean          |


## Output
| Name      | Description                | Type                    |
| --------- | -------------------------- | ----------------------- |
| voteEvent | Voting event of the player | string, boolean, number |
