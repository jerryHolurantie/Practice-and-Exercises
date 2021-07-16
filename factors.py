class FactorNum:
    def __init__(self, number):
        self.number = number
        self.factor_list = list()

    def get_factors(self, i = None):
        if self.number <= 0:
            return "Invalid Number"
        if self.number == 1:
            return self.number

        i = int(self.number / 2 if i == None else i)

        self.factor_list.append([i if self.number % i == 0 else None])

        if i == 1:
            return self.factor_list

        self.get_factors(i - 1)


if __name__ == "__main__":
    num = FactorNum(20)
    print(num.get_factors())
