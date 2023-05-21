using Blog.Core.Application.Dtos.Category;
using Blog.Core.Application.Features.Categories.Commands.CreateCategoryCommand;
using Blog.Core.Application.Features.Categories.Commands.DeleteCategoryCommand;
using Blog.Core.Application.Features.Categories.Commands.UpdateCategoryCommand;
using Blog.Core.Application.Features.Categories.Queries.GetAllCategoryQuery;
using Blog.Core.Application.Features.Categories.Queries.GetCategoryByIdQuery;
using Blog.Core.Application.Wrappers;
using Blog.Core.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.ComponentModel;

namespace Blog.Presentation.WebApi.Controllers.v1
{
    [ApiVersion("1.0")]
    public class CategoryController : BaseApiController
    {

        [HttpGet]
        [SwaggerOperation(
            Summary = "Mostrar todas las categorias",
            Description = "Muestra todas las categoria disponible")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(CategoryResponseDto))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ResponseErrors<>))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseErrors<>))]
        public async Task<ActionResult> GetAll()
        {
            return Ok(await Mediator.Send(new GetAllCategoryQuery()));
        }

        [HttpGet("{id}", Name = "GetCategoryById")]
        [SwaggerOperation(
            Summary = "Mostrar categorias por id",
            Description = "Mostrar la categoria por su id")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(CategoryResponseDto))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ResponseErrors<>))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseErrors<>))]
        public async Task<ActionResult> GetById(int id)
        {
            return Ok(await Mediator.Send(new GetCategoryByIdQuery() { CategoryId = id }));
        }

        [HttpPost("Register")]
        [SwaggerOperation(
            Summary = "Agregar categoria",
            Description = "Agrega una nueva categoria y la muestra")]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(CategoryResponseDto))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseErrors<>))]
        public async Task<ActionResult> Register(CreateCategoryCommand command)
        {
            var category = await Mediator.Send(command);
            return CreatedAtRoute("GetCategoryById", new { id = category.CategoryId }, category);
        }

        [HttpPut("Update/{categoryId}")]
        [SwaggerOperation(
            Summary = "Actualizar categoria",
            Description = "Actualiza un registro de la tabla categoria")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ResponseErrors<>))]
        [ProducesResponseType(StatusCodes.Status400BadRequest, Type = typeof(ResponseErrors<>))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseErrors<>))]
        public async Task<ActionResult> Update(int categoryId, UpdateCategoryCommand command)
        {
            if (categoryId != command.CategoryId)
                return BadRequest("Los parametros de categoryId no coinciden");

            var category = await Mediator.Send(command); 
            return Ok(category);
        }

        [HttpDelete("Delete/{id}")]
        [SwaggerOperation(
            Summary = "Borrar una categoria",
            Description = "Borrar una categoria por su id")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(ResponseErrors<>))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError, Type = typeof(ResponseErrors<>))]
        public async Task<ActionResult> Delete(int id)
        {
            var category = await Mediator.Send(new DeleteCategoryCommand() { CategoryId = id });
            return Ok(category);
        }
    }
}
