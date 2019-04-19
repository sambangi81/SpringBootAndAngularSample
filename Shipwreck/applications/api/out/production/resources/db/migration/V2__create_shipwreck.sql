USE [Coremeasures_Online]
GO

/****** Object:  Table [dbo].[Shipwreck]    Script Date: 4/12/2019 8:12:25 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[Shipwreck](
	[id] [BIGINT] IDENTITY(1,1) NOT NULL,
	[name] [VARCHAR](100) NULL,
	[description] [VARCHAR](100) NULL,
	[condition] [VARCHAR](100) NULL,
	[depth] [INT] NULL,
	[latitude] [FLOAT] NULL,
	[longitude] [FLOAT] NULL,
	[yearDiscovered] [INT] NULL,
 CONSTRAINT [PK__Shipwreck] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING ON
GO


