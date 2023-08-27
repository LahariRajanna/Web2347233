<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/Flipkart">
 <html>
 <head>
 <title>Flipkart Products</title>
 </head>
 <body>
 <h1>Flipkart Product List</h1>
 <table border="1">
 <tr>
 <th>ID</th>
 <th>Name</th>
 <th>Price</th>
 <th>Quantity</th>
 <th>Description</th>
 </tr>
 <xsl:for-each select="Flipkart/products/product">
 <tr>
 <td><xsl:value-of select="id"/></td>
 <td><xsl:value-of select="Name"/></td>
 <td><xsl:value-of select="price"/></td>
 <td><xsl:value-of select="quantity"/></td>
 <td><xsl:value-of select="Description"/></td>
 </tr>
 </xsl:for-each>
 </table>
 </body>
 </html>
 </xsl:template>
</xsl:stylesheet>