USE [EShop]
GO
SET IDENTITY_INSERT [dbo].[images] ON 
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (6, N'6100e094-3529-41d5-a7f2-e940aaa4fe6d.png', N'Redmi_1-Logo.wine.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (12, N'0802323f-f1ee-4557-ad2b-487f1b09a9cf.png', N'Banner_1.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (13, N'bde2d9c9-2e09-4ca6-acd3-92a8e5b97937.png', N'Banner_1.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (14, N'be435e4b-5ef3-44ea-9d7a-ed61690b2881.png', N'Banner_1.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (15, N'a4077f68-7183-4bba-b274-995cdb51babb.png', N'Banner_1.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (16, N'aabf0a85-c8a7-4f52-ac21-e32467f6f380.png', N'Banner_1.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (17, N'26910687-6a09-40e8-90ee-c416a370597e.png', N'Banner_1.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (18, N'4b5dedbc-74e4-4f29-a427-24c2c48d495e.jpg', N'TV & Video.jpg', N'.jpg')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (19, N'f313c3b7-e93f-4914-bf97-b05205053fb9.jpg', N'mobile.jpg', N'.jpg')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (20, N'9521cc1d-ae7a-4326-9a5a-e8f4daf5231d.webp', N'Computers.webp', N'.webp')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (21, N'32ba54fe-b248-41fb-847d-e189198a7943.jpg', N'Camera.jpg', N'.jpg')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (22, N'f68df56d-afe8-4d57-a6de-76f8f04dec44.jpg', N'Audio & Home Theater.jpg', N'.jpg')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (23, N'399aa985-a833-4b1c-b9f2-6cb3e017b727.webp', N'Wearable Technology.webp', N'.webp')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (24, N'b919a243-fd67-401e-9c98-ee5233c80e96.png', N'Redmi_1-Logo.wine.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (25, N'e8cf80d0-8ace-4558-bd0b-442b19a03dbb.jfif', N'Mi-4A-Horizon-Edition-Television-492166368-i-1-1200Wx1200H.jfif', N'.jfif')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (26, N'9b088535-6449-4845-815c-3802c99cbee2.png', N'sony.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (27, N'b1a7b8c4-9784-4a5e-b033-c7276697ca9a.jfif', N'Sony-KD-32W830K-IN5-Television-492912672-i-1-1200Wx1200H.jfif', N'.jfif')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (28, N'd245ebf3-5f83-422c-8d41-58da39fbc02c.jfif', N'Samsung-32T4050-Televisions-491694867-i-1-1200Wx1200H.jfif', N'.jfif')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (29, N'b06de405-2e90-49f0-adfe-eaa14bae74a1.png', N'download.png', N'.png')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (30, N'a5f99c62-5674-4e73-83b4-10d40936f6a8.jfif', N'Apple-Airpods-Pro-2nd-Gen-493839243-i-1-1200Wx1200H.jfif', N'.jfif')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (31, N'9c0f1b0e-15ab-4918-87a7-c0253f970d1b.jfif', N'Apple-Airpods-BTStereo-CC-491431363-i-1-1200Wx1200H.jfif', N'.jfif')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (32, N'b3f62bfb-6f71-40ed-96d1-28dbb8655dba.jpg', N'jbl.jpg', N'.jpg')
GO
INSERT [dbo].[images] ([Id], [ImageUrl], [ImageName], [ImageNameExt]) VALUES (33, N'0a5024b9-bf45-46d9-aa28-83d3675f9d98.jfif', N'JBL-Quantum-350-Bluetooth-Headphones-493179248-i-1-1200Wx1200H.jfif', N'.jfif')
GO
SET IDENTITY_INSERT [dbo].[images] OFF
GO
SET IDENTITY_INSERT [dbo].[brands] ON 
GO
INSERT [dbo].[brands] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (3, N'xiomi', 6, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[brands] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (4, N'MI', 24, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[brands] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (5, N'Sony', 26, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[brands] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (6, N'Apple', 29, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[brands] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (7, N'JBL', 32, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
SET IDENTITY_INSERT [dbo].[brands] OFF
GO
SET IDENTITY_INSERT [dbo].[categories] ON 
GO
INSERT [dbo].[categories] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (7, N'Television', 18, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[categories] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (8, N'Smartphones & Accessories', 19, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[categories] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (9, N'Laptops & Computers', 20, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[categories] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (10, N'Cameras', 21, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[categories] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (11, N'Audio Devices', 22, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
INSERT [dbo].[categories] ([Id], [Name], [ImageId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted]) VALUES (12, N'Wearables', 23, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0)
GO
SET IDENTITY_INSERT [dbo].[categories] OFF
GO
SET IDENTITY_INSERT [dbo].[products] ON 
GO
INSERT [dbo].[products] ([Id], [Name], [Description], [OriginalPrice], [StockQuantity], [AverageRating], [TotalReviews], [IsFeatured], [CategoryId], [BrandId], [ThumbnailId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted], [DiscountAmount], [DiscountPercentage]) VALUES (9, N'MI 32 HD Ready Smart LED TV, 4A Horizon, ELA4546IN', N'sample', CAST(19999.00 AS Decimal(18, 2)), 10, 0, 0, 1, 7, 4, 25, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0, NULL, CAST(35.00 AS Decimal(5, 2)))
GO
INSERT [dbo].[products] ([Id], [Name], [Description], [OriginalPrice], [StockQuantity], [AverageRating], [TotalReviews], [IsFeatured], [CategoryId], [BrandId], [ThumbnailId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted], [DiscountAmount], [DiscountPercentage]) VALUES (10, N'Sony Bravia 80 cm (32 inches) HD Ready Smart LED Google TV with Dolby Audio & Alexa Compatibility KD-32W830K (Black)', N'sample', CAST(34900.00 AS Decimal(18, 2)), 50, 0, 0, 0, 7, 5, 27, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0, NULL, CAST(23.00 AS Decimal(5, 2)))
GO
INSERT [dbo].[products] ([Id], [Name], [Description], [OriginalPrice], [StockQuantity], [AverageRating], [TotalReviews], [IsFeatured], [CategoryId], [BrandId], [ThumbnailId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted], [DiscountAmount], [DiscountPercentage]) VALUES (11, N'Samsung 80 cm (32 inch) HD Ready LED TV, 4 Series 32T4050', N'sample', CAST(19900.00 AS Decimal(18, 2)), 50, 0, 0, 0, 7, 5, 28, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0, NULL, CAST(25.00 AS Decimal(5, 2)))
GO
INSERT [dbo].[products] ([Id], [Name], [Description], [OriginalPrice], [StockQuantity], [AverageRating], [TotalReviews], [IsFeatured], [CategoryId], [BrandId], [ThumbnailId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted], [DiscountAmount], [DiscountPercentage]) VALUES (12, N'Apple Airpods Pro (2nd Gen-USB-C type) with MagSafe Charging Case True Wireless, with Active Noise Cancellation, Touch control, IP54 Dust, Sweat and water resistant, Bluetooth v5.3, Upto 30 hrs of playtime, White', N'sample', CAST(24900.00 AS Decimal(18, 2)), 100, 0, 0, 1, 11, 6, 30, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0, CAST(1910.00 AS Decimal(18, 2)), NULL)
GO
INSERT [dbo].[products] ([Id], [Name], [Description], [OriginalPrice], [StockQuantity], [AverageRating], [TotalReviews], [IsFeatured], [CategoryId], [BrandId], [ThumbnailId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted], [DiscountAmount], [DiscountPercentage]) VALUES (13, N'Apple AirPods (2nd Generation) with Charging Case, Hands-free Hey Siri, Upto 24 hrs of playtime, Speech-detecting accelerometer, MV7N2HN/A', N'sample', CAST(12900.00 AS Decimal(18, 2)), 100, 0, 0, 1, 11, 6, 31, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0, CAST(2000.00 AS Decimal(18, 2)), NULL)
GO
INSERT [dbo].[products] ([Id], [Name], [Description], [OriginalPrice], [StockQuantity], [AverageRating], [TotalReviews], [IsFeatured], [CategoryId], [BrandId], [ThumbnailId], [CreatedDate], [CreatedBy], [ModifiedDate], [ModifiedBy], [IsDeleted], [DiscountAmount], [DiscountPercentage]) VALUES (14, N'JBL Quantum 350 Over Ear Gaming Headphone with Detachable Boom mic, 22 hrs of playtime, JBL Quantum Sound Signature, 40 mm Drivers, Fast Charging, Black', N'sample', CAST(9999.00 AS Decimal(18, 2)), 100, 0, 0, 1, 11, 7, 33, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2), 0, NULL, 0, 0, NULL, CAST(55.00 AS Decimal(5, 2)))
GO
SET IDENTITY_INSERT [dbo].[products] OFF
GO
