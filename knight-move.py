import numpy as np

chess_board = np.arange(8 * 8).reshape((8, 8))
possible_moves = [ 1, 3, 5, 9, 15, 19, 21, 23 ]

def moves(pos):
    x, y = pos

    if x not in range(8) or y not in range(8):
        return 'Knight out of board bounds!'

    x_neg, x_pos = 0 if abs(x - 2) < -1 else abs(x - 1), 7 if x + 2 > 7 else x + 3
    y_neg, y_pos = 0 if abs(y - 2) < -1 else abs(y - 1), 7 if y + 2 > 7 else y + 3

    n_arr = chess_board[x_neg : x_pos, y_neg : y_pos].flatten()

    return [(x_neg, x_pos), (y_neg, y_pos)]

    # return n_arr[ possible_moves ]

if __name__ == '__main__':
    # print(chess_board)
    print(moves((2, 4)))
    print(moves((4, 4)))
    print(moves((1, 4)))
    print(moves((4, 1)))
    print(moves((0, 0)))
    print(moves((7, 7)))
    print(moves((4, 7)))
    print(moves((7, 4)))