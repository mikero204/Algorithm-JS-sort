# Algorithm-JS-sort
JavaScirpt 排序演算法實作

更新 Array.prototype.sortMax  /  Array.prototype.sortMin <font color="red">**2017-04-27 更新**</font>




<table class="hover textAlignCenter verticalAlignMiddle">
			<thead>
				<tr class=""> <th style="line-height: 40px;" rowspan="2">演算法</th> <th colspan="3">時間複雜度</th> <th style="line-height: 40px;" rowspan="2">空間複雜度</th> <th style="line-height: 40px;" rowspan="2">穩定性</th> <th style="line-height: 40px;" rowspan="2">類型</th></tr>
				<tr class=""> <th>Best</th> <th>Worst</th> <th>Avg</th> </tr>
			</thead>
			<tbody>
				<tr class=""> <th>選擇排序法(Selection Sort)</th> <td class=""> Ο(n<sup>2</sup>) </td> <td class=""> Ο(n<sup>2</sup>) </td> <td class=""> Ο(n<sup>2</sup>) </td> <td class=""> Ο(1) </td> <td class="">不穩定</td> <td class="">選擇</td></tr>
				<tr class=""> <th>插入排序法(Insertion Sort)</th> <td class=""> Ο(n) </td> <td class=""> Ο(n<sup>2</sup>) </td> <td class=""> Ο(n<sup>2</sup>) </td> <td class=""> Ο(1) </td> <td>穩定</td> <td>插入</td> </tr>		
				<tr class=""> <th>氣泡排序法(Bubble Sort)</th> <td class=""> Ο(n) </td> <td class=""> Ο(n<sup>2</sup>) </td> <td class=""> Ο(n<sup>2</sup>) </td> <td class=""> Ο(1) </td> <td>穩定</td> <td class="">交換</td></tr>
				<tr class=""> <th>謝爾排序法(Shell Sort)</th> <td class=""> Ο(n) </td> <td class=""> Ο(n<sup>2</sup>)~ Ο(n<sup>1.5</sup>)</td> <td class=""> Ο(n<sup>5/4</sup>) </td> <td class=""> Ο(n) + Ο(1) </td> <td class="">不穩定</td> <td class="">插入</td></tr>
				<tr class=""> <th>搖晃排序法(Shaker Sort)</th> <td class=""> Ο(n) </td> <td class=""> Ο(n<sup>2</sup>)</td> <td class=""> Ο(n<sup>2</sup>) </td> <td class=""> Ο(1) </td> <td>穩定</td> <td class="">交換</td></tr>
				<tr class="trHover"> <th>快速排序法(Quick Sort)</th> <td class=""> Ο(n log n) </td> <td class=""> Ο(n<sup>2</sup>)</td> <td class=""> Ο(n log n) </td> <td class=""> Ο(log n)~Ο(n) </td> <td class="">不穩定</td> <td class="">交換</td></tr>
				<tr class=""> <th>合併排序法(Merge Sort)</th> <td class=""> Ο(n log n) </td> <td class=""> Ο(n log n)</td> <td class=""> Ο(n log n) </td> <td class=""> Ο(n) </td> <td>穩定</td> <td class="">合併</td></tr>
				<tr class=""> <th>堆積排序法(Heap Sort)</th> <td class=""> Ο(n log n) </td> <td class=""> Ο(n log n)</td> <td class=""> Ο(n log n) </td> <td class=""> Ο(n) + Ο(1) </td> <td>不穩定</td> <td class="">選擇</td></tr>
				<tr class=""> <th>基數排序(Radix Sort)</th> <td class=""> Ο(d×(n+r)) </td> <td class=""> Ο(d×(n+r)) </td> <td class=""> Ο(d×(n+r)) </td> <td class=""> Ο(n×r) </td> <td>穩定</td> <td class="">分配</td></tr>
			</tbody>
</table>
