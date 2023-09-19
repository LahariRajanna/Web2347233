<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Jokes Table</title>
            </head>
            <body>
                <h1>Jokes</h1>
                <table border="1">
                    <tr>
                        <th>Category</th>
                        <th>Joke</th>
                    </tr>
                    <xsl:for-each select="jokes/category">
                        <tr>
                            <td>
                                <xsl:value-of select="." />
                            </td>
                            <td>
                                <xsl:value-of select="../joke[position()=current()/position()]" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>