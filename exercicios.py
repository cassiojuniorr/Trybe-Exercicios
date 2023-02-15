import json
import csv

def books_for_categore(list_book):
    categories = {}
    for book in list_book:
        for ctg in book["categories"]:
            if not categories.get(ctg):
                categories[ctg] = 0
            categories[ctg] += 1
    return categories

def percent(categorys, all_books):
    return [
        [category, num_books / all_books]
        for category, num_books in categorys.items()
    ]

with open("books.json") as file:
    books = json.load(file)
    ctgs = books_for_categore(books)

percent_by_books = percent(ctgs, len(books))
header = ["categoria", "percent"]

with open("books_percent_category.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(percent_by_books)

print('exec')
