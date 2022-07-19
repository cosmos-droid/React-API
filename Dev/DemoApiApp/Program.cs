using DemoApiApp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IShoeRepo, EFShoeRepo>();
builder.Services.AddDbContext<ShoeContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("ShoeConnection")));

builder.Services.AddCors(opts =>
{
    opts.AddDefaultPolicy(
        builder =>
        {
            builder.WithOrigins("https://.www.localhost:7061", "http://localhost:5098").
            AllowAnyHeader().
            AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.UseRouting();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
