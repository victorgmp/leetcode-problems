SELECT c.Name AS Customers
FROM Customers c
LEFT JOIN Orders o ON c.Id = o.CustomerId
WHERE o.CustomerId IS NULL

-- SELECT c.Name AS Customers
-- FROM Customers c
-- WHERE c.Id NOT IN (SELECT CustomerId from Orders)