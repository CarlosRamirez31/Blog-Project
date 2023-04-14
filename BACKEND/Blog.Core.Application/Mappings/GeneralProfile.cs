using AutoMapper;
using Blog.Core.Application.Dtos.Category;
using Blog.Core.Application.Dtos.Comment;
using Blog.Core.Application.Dtos.Post;
using Blog.Core.Application.Features.Categories.Commands.CreateCategoryCommand;
using Blog.Core.Application.Features.Categories.Commands.UpdateCategoryCommand;
using Blog.Core.Application.Features.Comments.Commands.CreateCommentCommand;
using Blog.Core.Application.Features.Posts.Commands.CreatePostCommand;
using Blog.Core.Application.Features.Posts.Commands.UpdatePostCommand;
using Blog.Core.Application.Wrappers;
using Blog.Core.Domain.Entities;

namespace Blog.Core.Application.Mappings
{
    public class GeneralProfile : Profile
    {
        public GeneralProfile()
        {
            #region Mappings

            #region Category

            CreateMap<Category, CategoryResponseDto>();
            CreateMap<CreateCategoryCommand, Category>();
            CreateMap<UpdateCategoryCommand, Category>();

            #endregion

            #region Post

            CreateMap<Post, PostResponseDto>();
            CreateMap<PageResponse<Post>, PageResponse<PostResponseDto>>();
            CreateMap<CreatePostCommand, Post>();
            CreateMap<UpdatePostCommand, Post>();

            #endregion

            #region Comment
            CreateMap<Comment, CommentResponseDto>();
            CreateMap<CreateCommentCommand, Comment>();

            #endregion

            #endregion
        }
    }
}
