USE [Blog]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 5/20/2023 9:28:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[CommentId] [int] IDENTITY(1,1) NOT NULL,
	[Content] [nvarchar](255) NOT NULL,
	[PostId] [int] NOT NULL,
	[CreatedBy] [nvarchar](max) NOT NULL,
	[Created] [datetime2](7) NOT NULL,
	[LastModified] [datetime2](7) NULL,
 CONSTRAINT [PK_Comments] PRIMARY KEY CLUSTERED 
(
	[CommentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Posts]    Script Date: 5/20/2023 9:28:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Posts](
	[PostId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](255) NOT NULL,
	[Brief] [nvarchar](255) NULL,
	[Content] [nvarchar](max) NOT NULL,
	[ImagePath] [nvarchar](max) NULL,
	[CategoryId] [int] NULL,
	[CreatedBy] [nvarchar](max) NOT NULL,
	[Created] [datetime2](7) NOT NULL,
	[LastModifiedBy] [nvarchar](max) NULL,
	[LastModified] [datetime2](7) NULL,
 CONSTRAINT [PK_Posts] PRIMARY KEY CLUSTERED 
(
	[PostId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [Pk_Comment_Post] FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([PostId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [Pk_Comment_Post]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [Pk_Post_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([CategoryId])
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [Pk_Post_Category]
GO
