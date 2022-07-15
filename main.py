def main():
    class MyClass:
        def __init__(self, name="Белый"):
            self.name = name
            print("Создан объект: ", self.name)

        def __del__(self):
            print("Удален объект: ", self.name)

    def create(name):
        obj = MyClass(name)

    A = MyClass()
    B = MyClass("Красный")
    C = MyClass("Синий")

    create("Желтый")

    C.name = "Желтый"

    del A
    del B
    del C


if __name__ == "__main__":
    main()
