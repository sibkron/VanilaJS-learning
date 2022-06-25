class Person:
    name = "Ivan"
    age = 40

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def set(self, name, age):
        self.name = name
        self.age = age

    def getName(self):
        return self.name

    def getAge(self):
        return self.age


vlad = Person("Vlad", 38)
print(vlad.getName())

petr = Person("Petr", 35)
print(petr.name)
