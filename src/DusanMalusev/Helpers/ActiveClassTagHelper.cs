using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace DusanMalusev.Helpers;

[HtmlTargetElement(Attributes = ActiveAttribute)]
public class ActiveClassTagHelper : TagHelper
{
    private const string ActiveAttribute = "is-active-page";

    private readonly IHttpContextAccessor _contextAccessor;
    
    [HtmlAttributeName("asp-page")] public string? Page { get; set; }

    public ActiveClassTagHelper(IHttpContextAccessor contextAccessor)
    {
        _contextAccessor = contextAccessor;
    }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        base.Process(context, output);

        var currentPage = _contextAccessor.HttpContext?.Request.Path.Value;
        
        if (string.IsNullOrWhiteSpace(Page))
        {
            return;
        }

        if (string.Equals("/", currentPage))
        {
            currentPage = "/Index";
        }


        if (!string.Equals(Page, currentPage, StringComparison.CurrentCultureIgnoreCase))
        {
            return;
        }

        var classAttrObj = output.Attributes.FirstOrDefault(a => a.Name == "class");
        
        if (classAttrObj is null)
        {
            classAttrObj = new TagHelperAttribute("class", "active");
            output.Attributes.Add(classAttrObj);
        }
        else switch (classAttrObj.Value)
        {
            case null:
                output.Attributes.SetAttribute("class", "active");
                break;
            case HtmlString classAttr:
                output.Attributes.SetAttribute("class", $"{classAttr} active");
                break;
        }

        output.Attributes.RemoveAll(ActiveAttribute);
    }
}