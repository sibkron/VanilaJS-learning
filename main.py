d = {a: a**2 for a in range(7)}
print(d)

person = {'name': {'last_name': 'Иванов',
                   'first_name': 'Иван', 'middle_name': 'Иванович'}, 'address': ['г. Андрюшки', 'ул. Васильевская д.236']}
print(person['name']['first_name'])
print(person.values())
