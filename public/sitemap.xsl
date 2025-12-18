<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>XML Sitemap</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<link rel="icon" type="image/svg+xml" href="https://res.cloudinary.com/dhyc478ch/image/upload/v1765255874/Untitled_design1_wwwx1q.svg" />
				<link rel="shortcut icon" href="https://res.cloudinary.com/dhyc478ch/image/upload/v1765255874/Untitled_design1_wwwx1q.svg" />
				<style type="text/css">
					body {
						font-family: Arial, sans-serif;
						font-size: 13px;
						color: #545353;
						background: #f9f9f9;
						margin: 0;
						padding: 20px;
					}
					table {
						border: none;
						border-collapse: collapse;
						width: 100%;
						background: white;
						margin: 20px 0;
						box-shadow: 0 1px 3px rgba(0,0,0,0.1);
					}
					th {
						background: #4285f4;
						color: white;
						font-weight: normal;
						padding: 11px 15px;
						text-align: left;
					}
					td {
						padding: 11px 15px;
						border-bottom: 1px solid #f0f0f0;
					}
					tr:hover {
						background: #f5f5f5;
					}
					.header {
						background: white;
						padding: 20px;
						margin-bottom: 20px;
						border-radius: 5px;
						box-shadow: 0 1px 3px rgba(0,0,0,0.1);
					}
					h1 {
						color: #333;
						margin: 0 0 10px 0;
					}
					.desc {
						color: #666;
						margin: 0;
					}
				</style>
			</head>
			<body>
				<div class="header">
					<h1>XML Sitemap</h1>
					<p class="desc">This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.</p>
				</div>
				<table>
					<tr>
						<th>URL</th>
						<th>Last Modified</th>
						<th>Change Frequency</th>
						<th>Priority</th>
					</tr>
					<xsl:for-each select="sitemap:urlset/sitemap:url">
						<tr>
							<td>
								<xsl:variable name="itemURL">
									<xsl:value-of select="sitemap:loc"/>
								</xsl:variable>
								<a href="{$itemURL}">
									<xsl:value-of select="sitemap:loc"/>
								</a>
							</td>
							<td>
								<xsl:value-of select="sitemap:lastmod"/>
							</td>
							<td>
								<xsl:value-of select="sitemap:changefreq"/>
							</td>
							<td>
								<xsl:value-of select="sitemap:priority"/>
							</td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>