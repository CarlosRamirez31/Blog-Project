using AutoMapper;
using Blog.Core.Application.Dtos.Category;
using Blog.Core.Application.Features.Categories.Commands.CreateCategoryCommand;
using Blog.Core.Application.Features.Categories.Commands.UpdateCategoryCommand;
using Blog.Core.Domain.Entities;

namespace Blog.Core.Application.Mappings
{
    public class GeneralProfile : Profile
    {
        public GeneralProfile()
        {
            CreateMap<Category, CategoryResponseDto>();
            CreateMap<CreateCategoryCommand, Category>();
            CreateMap<UpdateCategoryCommand, Category>();
        }
    }
}
