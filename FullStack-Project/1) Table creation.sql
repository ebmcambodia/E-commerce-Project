GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Address]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Address](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AddressLine1] [nvarchar](max) NOT NULL,
	[AddressLine2] [nvarchar](max) NULL,
	[City] [nvarchar](max) NOT NULL,
	[State] [nvarchar](max) NOT NULL,
	[PostalCode] [nvarchar](max) NOT NULL,
	[Country] [nvarchar](max) NOT NULL,
	[UserId] [int] NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[ModifiedDate] [datetime2](7) NULL,
	[ModifiedBy] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Address] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[brands]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[brands](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[ImageId] [int] NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[ModifiedDate] [datetime2](7) NULL,
	[ModifiedBy] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_brands] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[categories]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[ImageId] [int] NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[ModifiedDate] [datetime2](7) NULL,
	[ModifiedBy] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[images]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[images](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ImageUrl] [nvarchar](max) NOT NULL,
	[ImageName] [nvarchar](max) NOT NULL,
	[ImageNameExt] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_images] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrderItems]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderItems](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[OrderId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
	[TotalPriceAfterDiscount] [decimal](18, 2) NOT NULL,
	[TotalDiscount] [decimal](18, 2) NOT NULL,
	[TotalPrice] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_OrderItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[OrderDate] [datetime2](7) NOT NULL,
	[TotalPriceAfterDiscount] [decimal](18, 2) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[ModifiedDate] [datetime2](7) NULL,
	[ModifiedBy] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[TotalDiscount] [decimal](18, 2) NOT NULL,
	[TotalPrice] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PaymentDetails]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentDetails](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[OrderId] [int] NOT NULL,
	[RazorPayOrderId] [nvarchar](max) NOT NULL,
	[Amount] [decimal](18, 2) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[Razorpay_payment_id] [nvarchar](max) NULL,
	[Razorpay_signature] [nvarchar](max) NULL,
 CONSTRAINT [PK_PaymentDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProductReviews]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductReviews](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Review] [nvarchar](max) NOT NULL,
	[ProductId] [int] NOT NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[ModifiedDate] [datetime2](7) NULL,
	[ModifiedBy] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[Rating] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_ProductReviews] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[products]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[OriginalPrice] [decimal](18, 2) NOT NULL,
	[StockQuantity] [int] NOT NULL,
	[AverageRating] [float] NOT NULL,
	[TotalReviews] [int] NOT NULL,
	[IsFeatured] [bit] NOT NULL,
	[CategoryId] [int] NOT NULL,
	[BrandId] [int] NOT NULL,
	[ThumbnailId] [int] NULL,
	[CreatedDate] [datetime2](7) NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[ModifiedDate] [datetime2](7) NULL,
	[ModifiedBy] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
	[DiscountAmount] [decimal](18, 2) NULL,
	[DiscountPercentage] [decimal](5, 2) NULL,
 CONSTRAINT [PK_products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[shippingAddresses]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[shippingAddresses](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[AddressLine1] [nvarchar](max) NOT NULL,
	[AddressLine2] [nvarchar](max) NULL,
	[City] [nvarchar](max) NOT NULL,
	[State] [nvarchar](max) NOT NULL,
	[PostalCode] [nvarchar](max) NOT NULL,
	[Country] [nvarchar](max) NOT NULL,
	[OrderId] [int] NOT NULL,
 CONSTRAINT [PK_shippingAddresses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShopcartItems]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShopcartItems](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ShoppingCartId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
	[Quantity] [int] NOT NULL,
 CONSTRAINT [PK_ShopcartItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shopcarts]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shopcarts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_Shopcarts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Role] [nvarchar](max) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[RefreshToken] [nvarchar](max) NOT NULL,
	[RefreshTokenExpire] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WishlistItems]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WishlistItems](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[WishlistId] [int] NOT NULL,
	[ProductId] [int] NOT NULL,
 CONSTRAINT [PK_WishlistItems] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Wishlists]    Script Date: 12/30/2024 5:55:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Wishlists](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_Wishlists] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Address] ADD  DEFAULT (N'') FOR [FirstName]
GO
ALTER TABLE [dbo].[Address] ADD  DEFAULT (N'') FOR [LastName]
GO
ALTER TABLE [dbo].[OrderItems] ADD  DEFAULT ((0.0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[OrderItems] ADD  DEFAULT ((0.0)) FOR [TotalPrice]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ((0.0)) FOR [TotalDiscount]
GO
ALTER TABLE [dbo].[Orders] ADD  DEFAULT ((0.0)) FOR [TotalPrice]
GO
ALTER TABLE [dbo].[ProductReviews] ADD  DEFAULT ((0)) FOR [Rating]
GO
ALTER TABLE [dbo].[ProductReviews] ADD  DEFAULT ((0)) FOR [UserId]
GO
ALTER TABLE [dbo].[Address]  WITH CHECK ADD  CONSTRAINT [FK_Address_users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[users] ([UserId])
GO
ALTER TABLE [dbo].[Address] CHECK CONSTRAINT [FK_Address_users_UserId]
GO
ALTER TABLE [dbo].[brands]  WITH CHECK ADD  CONSTRAINT [FK_brands_images_ImageId] FOREIGN KEY([ImageId])
REFERENCES [dbo].[images] ([Id])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[brands] CHECK CONSTRAINT [FK_brands_images_ImageId]
GO
ALTER TABLE [dbo].[categories]  WITH CHECK ADD  CONSTRAINT [FK_categories_images_ImageId] FOREIGN KEY([ImageId])
REFERENCES [dbo].[images] ([Id])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[categories] CHECK CONSTRAINT [FK_categories_images_ImageId]
GO
ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderItems_Orders_OrderId] FOREIGN KEY([OrderId])
REFERENCES [dbo].[Orders] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderItems] CHECK CONSTRAINT [FK_OrderItems_Orders_OrderId]
GO
ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderItems_products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[OrderItems] CHECK CONSTRAINT [FK_OrderItems_products_ProductId]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[users] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_users_UserId]
GO
ALTER TABLE [dbo].[ProductReviews]  WITH CHECK ADD  CONSTRAINT [FK_ProductReviews_products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ProductReviews] CHECK CONSTRAINT [FK_ProductReviews_products_ProductId]
GO
ALTER TABLE [dbo].[ProductReviews]  WITH CHECK ADD  CONSTRAINT [FK_ProductReviews_users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[users] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ProductReviews] CHECK CONSTRAINT [FK_ProductReviews_users_UserId]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_products_brands_BrandId] FOREIGN KEY([BrandId])
REFERENCES [dbo].[brands] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_products_brands_BrandId]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_products_categories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[categories] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_products_categories_CategoryId]
GO
ALTER TABLE [dbo].[products]  WITH CHECK ADD  CONSTRAINT [FK_products_images_ThumbnailId] FOREIGN KEY([ThumbnailId])
REFERENCES [dbo].[images] ([Id])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[products] CHECK CONSTRAINT [FK_products_images_ThumbnailId]
GO
ALTER TABLE [dbo].[ShopcartItems]  WITH CHECK ADD  CONSTRAINT [FK_ShopcartItems_products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ShopcartItems] CHECK CONSTRAINT [FK_ShopcartItems_products_ProductId]
GO
ALTER TABLE [dbo].[ShopcartItems]  WITH CHECK ADD  CONSTRAINT [FK_ShopcartItems_Shopcarts_ShoppingCartId] FOREIGN KEY([ShoppingCartId])
REFERENCES [dbo].[Shopcarts] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ShopcartItems] CHECK CONSTRAINT [FK_ShopcartItems_Shopcarts_ShoppingCartId]
GO
ALTER TABLE [dbo].[Shopcarts]  WITH CHECK ADD  CONSTRAINT [FK_Shopcarts_users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[users] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Shopcarts] CHECK CONSTRAINT [FK_Shopcarts_users_UserId]
GO
ALTER TABLE [dbo].[WishlistItems]  WITH CHECK ADD  CONSTRAINT [FK_WishlistItems_products_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[products] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[WishlistItems] CHECK CONSTRAINT [FK_WishlistItems_products_ProductId]
GO
ALTER TABLE [dbo].[WishlistItems]  WITH CHECK ADD  CONSTRAINT [FK_WishlistItems_Wishlists_WishlistId] FOREIGN KEY([WishlistId])
REFERENCES [dbo].[Wishlists] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[WishlistItems] CHECK CONSTRAINT [FK_WishlistItems_Wishlists_WishlistId]
GO
ALTER TABLE [dbo].[Wishlists]  WITH CHECK ADD  CONSTRAINT [FK_Wishlists_users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[users] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Wishlists] CHECK CONSTRAINT [FK_Wishlists_users_UserId]
GO
