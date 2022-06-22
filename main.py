l = [34, 'sd', 56, 34.34]

i = 0
while i < 4:
    print(l[i])
    i += 1

# items[START:STOP:STEP]
print(l[:])
print(l[1:])
print(l[:3])
print(l[::2])
print(l[::-2])

a = (43, 56, 42.23, 'sd')
b = [43, 56, 42.23, 'sd']
print(a.__sizeof__())
print(b.__sizeof__())
