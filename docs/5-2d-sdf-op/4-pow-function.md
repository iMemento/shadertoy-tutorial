---
sidebar_position: 1
---

# 5.4 了解 pow 函数
你可能想知道为什么我以如此奇怪的方式创建 sdHeart 函数。为什么不使用我们可用的 [**pow**](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/pow.xhtml) 功能呢？pow（x，y) 函数接受一个值 x，并将其提高到 y 的幂。

如果您尝试使用 pow 函数，您会立即看到心脏的行为有多么奇怪。

```c
float sdHeart(vec2 uv, float size, vec2 offset) {
  float x = uv.x - offset.x;
  float y = uv.y - offset.y;
  float group = pow(x,2.) + pow(y,2.) - size;
  float d = pow(group,3.) - pow(x,2.) * pow(y,3.);

  return d;
}
```
<p align="center">![-](./img/img-18.png)</p>

嗯，这看起来不太对🤔劲。如果你在情人节那天把它发给某人，他们可能会认为这是[**墨迹测试（inkblot test）**](https://en.wikipedia.org/wiki/Rorschach_test)。

那么为什么 **pow（x, y)** 函数的行为如此奇怪呢？如果你仔细查看此[**函数的文档**](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/pow.xhtml)，那么你会发现如果 x 小于零，或者 x 都等于零且 y 都小于或等于零，则此函数返回 **undefined**。

请记住，**pow** 函数的实现因编译器和硬件而异，因此在为 **Shadertoy** 以外的其他平台开发着色器时，您可能不会遇到此问题，或者您可能会遇到不同的问题。

因为我们的坐标系被设置为具有 x 和 y 的负值，所以我们有时会因为 pow 函数而返回 **undefined**。在 Shadertoy 中，编译器将在数学运算中使用 undefined，这会导致令人困惑的结果。

我们可以通过使用 color 调试 canvas 来试验 undefined 在不同算术运算中的行为。让我们尝试向 undefined 添加一个数字：

```cpp
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 uv = fragCoord/iResolution.xy; // <0, 1>
  uv -= 0.5; // <-0.5,0.5>

  vec3 col = vec3(pow(-0.5, 1.));
  col += 0.5;

  fragColor = vec4(col,1.0);
  // Screen is gray which means undefined is treated as zero
}
```
让我们尝试从 **undefined** 中减去一个数字：

```cpp
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 uv = fragCoord/iResolution.xy; // <0, 1>
  uv -= 0.5; // <-0.5,0.5>

  vec3 col = vec3(pow(-0.5, 1.));
  col -= -0.5;

  fragColor = vec4(col,1.0);
  // Screen is gray which means undefined is treated as zero
}
```

让我们尝试将一个数字乘以 **undefined**

```cpp
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 uv = fragCoord/iResolution.xy; // <0, 1>
  uv -= 0.5; // <-0.5,0.5>

  vec3 col = vec3(pow(-0.5, 1.));
  col *= 1.;

  fragColor = vec4(col,1.0);
  // Screen is black which means undefined is treated as zero
}
```

让我们尝试将 **undefined** 除以一个数字：

```cpp
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
  vec2 uv = fragCoord/iResolution.xy; // <0, 1>
  uv -= 0.5; // <-0.5,0.5>

  vec3 col = vec3(pow(-0.5, 1.));
  col /= 1.;

  fragColor = vec4(col,1.0);
  // Screen is black which means undefined is treated as zero
}
```

从我们收集的观察结果中，我们可以得出结论，在算术运算中使用 **undefined** 时，它被视为**零**值。但是，这仍可能因编译器和图形硬件而异。因此，您需要小心如何在着色器代码中使用 **pow 函数**。

如果要对值进行平方，一个常见的技巧是使用 [**dot 函数**](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/dot.xhtml)来计算向量与自身之间的**点积**。这让我们重写 **sdHeart** 函数，使其更简洁一些：

```cpp
float sdHeart(vec2 uv, float size, vec2 offset) {
  float x = uv.x - offset.x;
  float y = uv.y - offset.y;
  float group = dot(x,x) + dot(y,y) - size;
  float d = group * dot(group, group) - dot(x,x) * dot(y,y) * y;

  return d;
}
```

调用 **dot(x, x)** 与对 x 的值求平方相同，但您不必处理 **pow 函数**的麻烦。





