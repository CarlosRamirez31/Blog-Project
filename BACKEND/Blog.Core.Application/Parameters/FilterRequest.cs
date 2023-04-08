namespace Blog.Core.Application.Parameters
{
    public class FilterRequest : PaginationRequest
    {
        public int? NumFilter { get; set; }
        public string? TextFilter { get; set; }
        public string? StarDate { get; set; }
        public string? EndDate { get; set; }
        public bool? Download { get; set; }
    }
}
