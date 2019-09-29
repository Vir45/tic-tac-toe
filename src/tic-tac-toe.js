class TicTacToe {
    constructor() {
      this.matrix = this.makeMatrix();
      this.currentPlayer = 'x';
      this.winner = null;
    }
  
    makeMatrix(columns = 3, rows = 3) {
      let matrixArr = [];
      for (let x = 0; x < rows; x++) {
        let row = {};
        for (let y = 0; y < columns; y++) {
          row[y] = null;
        }
        matrixArr[x] = row;
      }
  
      return matrixArr;
    }
  
    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }
  
    nextTurn(row, col) {
      if (!this.matrix[row][col]) {
        this.matrix[row][col] = this.currentPlayer;
        if (this.currentPlayer === 'x') {
          this.currentPlayer = 'o';
        } else {
          this.currentPlayer = 'x';
        }
      }
    }
  
    isFinished() {
      let winner = this.getWinner();
  
      if (this.isDraw() || !!winner) {
        return true;
      }  
      return false;
    }
  
    getWinner() {

        if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][1] === this.matrix[0][2] && this.matrix[0][0] != null) {
            this.winner = this.matrix[0][0];
        } else if (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[1][2] && this.matrix[1][0] != null) {
            this.winner = this.matrix[1][0];
        } else if (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][1] === this.matrix[2][2] && this.matrix[2][0] != null) {
            this.winner = this.matrix[2][0];

        } else if (this.matrix[0][0] === this.matrix[1][0] && this.matrix[1][0]=== this.matrix[2][0] && this.matrix[0][0] != null) {
            this.winner = this.matrix[0][0];
        } else if (this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][1] && this.matrix[0][1] != null) {
            this.winner = this.matrix[0][1];
        } else if (this.matrix[0][2] === this.matrix[1][2] && this.matrix[1][2] === this.matrix[2][2] && this.matrix[0][2] != null) {
            this.winner = this.matrix[0][2];

        } else if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2] && this.matrix[0][0] != null) {
            this.winner = this.matrix[0][0];
        } else if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0] && this.matrix[0][2] != null ) {
            this.winner = this.matrix[0][2];
        }

        if (this.winner) {
            return this.winner;
        } else {
            return null;
        }
    }
  
    noMoreTurns() {
      let hasEmptyFields = this.matrix.some(item => Object.values(item).indexOf(null) > -1);
  
      return !hasEmptyFields;
    }
  
    isDraw() {
      let winner = this.getWinner();
  
      if ( this.noMoreTurns() && !winner) {
        return true;
      }
      return false;
    }
  
    getFieldValue(row, col) {
      return this.matrix[row][col];
    }
  }
  
  module.exports = TicTacToe;