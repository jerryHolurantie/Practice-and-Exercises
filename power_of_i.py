def power_of_i(num):
    if num % 4 == 0:
        return 1
    if num % 4 == 1:
        return "i"
    if num % 4 == 2:
        return -1
    if num % 4 == 3:
        return "-i"
    
if __name__ == "__main__":
    # print(4 % 4)
    print(power_of_i(4))
    print(power_of_i(3))
    print(power_of_i(2))
    print(power_of_i(1))
    print(power_of_i(304))
    print(power_of_i(136))
    print(power_of_i(550))