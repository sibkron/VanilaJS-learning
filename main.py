l = []
lis = [1, 56, 'x', 34, 2.34, ['S', 't', 'r', 'o', 'k', 'a']]
print(lis)
a = [a + b for a in 'list' if a != 's' for b in 'soup' if b != 'u']
print(a)

l.append(23)
l.append(34)
print(l)
b = [24, 67]
l.extend(b)
print(l)
l.insert(1, 56)
print(l)
l.append(34)
l.remove(34)
print(l)
l.pop(0)
print(l)
print(l.index(56))
print(l.count(34))
l.sort()
print(l)
l.reverse()
print(l)
l.clear()
print(l)
