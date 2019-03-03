import csv
import json

csvfile = open('CalvingPrediction.csv', 'rb')
jsonfilePositive = open('dataPositive.json', 'w')
jsonfileNegative = open('dataNegative.json', 'w')
csvFileArray = []
myMap = {}
currId = ""
invalid = ""

for row in csv.reader(csvfile, delimiter = ','):
	if row[0] == '':
		continue
	csvFileArray.append(row)

for row in csvFileArray:
	if invalid == row[0]:
		continue
	if currId == row[0]:
		myMap[currId] = myMap[currId] + 1
	else:
		currId = row[0]
		myMap[currId] = 1
	if not row[20] or not row[21] or not row[22] or not row[23] or not row[24] or not row[25] or not row[26] or not [27]:
		invalid = row[0]
		continue
# print (myMap)

counter = 0
currId = ""
arrayPos2D = []
arrayNeg2D = []
arrayPos = []
arrayNeg = []
for row in csvFileArray:
	if currId != row[0]:
		if myMap[row[0]] < 121:
			continue
		else:
			currId = row[0]
			if arrayPos:
				arrayPos2D.append(arrayPos)
			if arrayNeg:
				arrayNeg2D.append(arrayNeg)
			arrayPos = []
			arrayNeg = []

	# arrayPos = []
	# arrayNeg = []
	if int(row[36])<=0 and int(row[36])>=-36:
		arrayPos.append(row[0])
		if row[1] != '1':
			arrayPos.append("0")
		else :
			arrayPos.append("1")
		arrayPos.append(row[18])
		hr = int(row[18].split(":")[0])
		if hr >= 6 and hr <= 20:
			arrayPos.append("1")
		else:
			arrayPos.append("0")
		arrayPos.append(row[19])
		arrayPos.append(row[20])
		arrayPos.append(row[21])
		arrayPos.append(row[22])
		arrayPos.append(row[23])
		arrayPos.append(row[24])
		arrayPos.append(row[25])
		arrayPos.append(row[26])
		arrayPos.append(row[27])
		arrayPos.append(row[31])
		arrayPos.append(row[36])
		arrayPos.append("1")

	if int(row[36])<=-12 and int(row[36])>=-48:
		arrayNeg.append(row[0])
		if row[1] != '1':
			arrayNeg.append("0")
		else :
			arrayNeg.append("1")
		arrayNeg.append(row[18])
		hr = int(row[18].split(":")[0])
		if hr >= 6 and hr <= 20:
			arrayNeg.append("1")
		else:
			arrayNeg.append("0")
		arrayNeg.append(row[19])
		arrayNeg.append(row[20])
		arrayNeg.append(row[21])
		arrayNeg.append(row[22])
		arrayNeg.append(row[23])
		arrayNeg.append(row[24])
		arrayNeg.append(row[25])
		arrayNeg.append(row[26])
		arrayNeg.append(row[27])
		arrayNeg.append(row[31])
		arrayNeg.append(row[36])
		arrayNeg.append("0")
	# if arrayPos:
	# 	json.dump(arrayPos, jsonfilePositive)
	# 	jsonfilePositive.write('\n')
	# if arrayNeg:
	# 	json.dump(arrayNeg, jsonfileNegative)
	# 	jsonfileNegative.write('\n')

json.dump(arrayPos2D, jsonfilePositive)
jsonfilePositive.write('\n')

json.dump(arrayNeg2D, jsonfileNegative)
jsonfileNegative.write('\n')
